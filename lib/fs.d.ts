/// <reference types="node" />
/// <reference types="node" />
import { Dirent } from 'fs';
interface FileReadOptions {
    encoding: "utf-8";
    flag: string;
}
interface DirReadOptions {
    encoding: "utf-8";
    withFileTypes: boolean;
    recursive: boolean;
}
declare const fs: {
    readFileSync: (path: string, options?: FileReadOptions) => Buffer | string;
    readdirSync: (path: string, options?: DirReadOptions) => string[] | Dirent[];
};
export default fs;
