
import crypto from 'crypto';

interface Data {
    name: string;
    umur: number;
    hobi: string;
  }


export function Encrypt(data: Data, key: string): string {
    if (key.length !== 32) {
        throw new Error('Invalid key length. Key should be 32 bytes (256 bits).');
      }
      
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(JSON.stringify(data));
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
  }


  export function Decrypt(text: string, key: string): Data {
    if (key.length !== 32) {
      throw new Error('Invalid key length. Key should be 32 bytes (256 bits).');
    }
    
    const parts = text.split(':');
    const iv = Buffer.from(parts[0], 'hex');
    const encryptedText = Buffer.from(parts[1], 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return JSON.parse(decrypted.toString());
  }
