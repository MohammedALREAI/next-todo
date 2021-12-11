import { PrismaClient } from '@prisma/client';

declare global {

    declare namespace NodeJS {
        export interface ProcessEnv {
          
          SITE:string
          API_ENDPOINT: string;
        }
    }
}














declare module "*.svg" {
    const content: any;
    export default content;
  }
  declare module "*.png" {
    const content: any;
    export default content;
  }
  declare module "*.jpg" {
    const content: any;
    export default content;
  }
  declare module "*.gif" {
    const content: any;
    export default content;
  }

