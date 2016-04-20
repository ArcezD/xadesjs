namespace xadesjs {

    interface CryptoEx extends Crypto {
        name: string;
    }

    let _crypto: CryptoEx = null;

    export class Application {

        static setEngine(name: string, crypto: Crypto): void {
            _crypto = <any>crypto;
            _crypto.name = name;
        }
        static get crypto(): CryptoEx {
            if (!_crypto)
                throw new XmlError(XE.CRYPTOGRAPHIC_NO_MODULE);
            return _crypto;
        }

        static isNodePlugin(): boolean {
            return (typeof module !== "undefined");
        }
    }

    // set default w3 WebCrypto
    +function init() {
        if (!Application.isNodePlugin()) {
            Application.setEngine("W3 WebCrypto module", window.crypto);
        }
    } ();

}