export class Os {
    constructor() {
        this.EOL = "\n";
        this.arch = () => {
            return "wasm32/wasi";
        };
    }
}
const os = new Os();
export default os;
