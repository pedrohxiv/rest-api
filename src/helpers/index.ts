import crypto from 'crypto';

export function random() {
  return crypto.randomBytes(128).toString('base64');
}

export function authentication(salt: string, password: string): string {
  return crypto
    .createHmac('sha256', [salt, password].join('/'))
    .update(process.env.SECRET_KEY)
    .digest('hex');
}
