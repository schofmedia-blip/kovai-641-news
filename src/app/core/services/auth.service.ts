import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { AuthSession, User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly supabase: SupabaseService) {}

  get session(): Promise<AuthSession | null> {
    return this.supabase.client.auth.getSession().then(({ data }) => data.session);
  }

  get user(): Promise<User | null> {
    return this.supabase.client.auth.getUser().then(({ data }) => data.user);
  }

  async signInWithEmail(email: string) {
    return this.supabase.client.auth.signInWithOtp({ email });
  }

  async signInWithGoogle() {
    return this.supabase.client.auth.signInWithOAuth({
      provider: 'google'
    });
  }

  async signOut() {
    return this.supabase.client.auth.signOut();
  }
}
