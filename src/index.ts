import pino from 'pino'

import { config } from '@/lib/config'

const logger = pino(config.logger)
const start = async () => {
  logger.info(config.logger.name)
}

if (require.main === module) {
  start()
}
