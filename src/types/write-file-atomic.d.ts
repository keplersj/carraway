/// <reference types="node" />

declare module "write-file-atomic" {
  export = writeFile;

  function writeFile(
    filename: string,
    data: string | Buffer,
    options: writeFile.Options,
    callback: (error?: Error) => void
  ): void;
  function writeFile(
    filename: string,
    data: string | Buffer,
    callback: (error?: Error) => void
  ): void;

  function writeFile(
    filename: string,
    data: string | Buffer,
    options: writeFile.Options
  ): Promise<void>;
  function writeFile(filename: string, data: string | Buffer): Promise<void>;

  namespace writeFile {
    function sync(
      filename: string,
      data: string | Buffer,
      options?: Options
    ): void;

    interface Options {
      chown?: {
        uid: number;
        gid: number;
      };
      encoding?: string;
      fsync?: boolean;
      mode?: number;
    }
  }
}
