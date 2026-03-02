import { Injectable } from '@nestjs/common';

@Injectable()
export class RpcService {
  status() {
    return { rpc: 'ok' };
  }

  call(payload: any) {
    // Placeholder for proxying to chain RPC
    return { proxied: true, payload };
  }
}
