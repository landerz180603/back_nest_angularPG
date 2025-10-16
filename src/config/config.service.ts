import { Injectable } from '@nestjs/common';
import { parse } from 'path';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
    private readonly envConfig: { [key: string]: string };
    constructor() {
        const isDevelopment = process.env.NODE_ENV !== 'production';
        if (isDevelopmentEnv) {
        const envFilePath = __dirname + '/../../.env.development';
        const existsPath = fs.existsSync(envFilePath)
        if (existsPath) {
            console.log('Cargando variables de desarrollo');
        }
        this.envConfig = parse(fs.readFileSync(envFilePath));
}
