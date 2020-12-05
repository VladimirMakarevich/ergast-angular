import { ConfigService } from '../services/config.service';

export function appInitialize(configService: ConfigService): () => Promise<any> {
  return () => configService.initialize().toPromise();
}
