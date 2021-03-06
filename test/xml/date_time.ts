import * as assert from "assert";
import * as XAdES from "../../";
const { XMLSerializer } = require("xmldom-alpha");

context("xml", () => {

    context("DateTime", () => {
        const DATE = new Date();

        context("Get XML", () => {

            it("Default format", () => {
                const dt = new XAdES.xml.XadesDateTime();
                dt.Value = DATE;

                const xml = dt.GetXml();
                const test = new XMLSerializer().serializeToString(xml);
                assert.equal(test, `<xades:XadesDateTime xmlns:xades="http://uri.etsi.org/01903/v1.3.2#">${DATE.toISOString()}</xades:XadesDateTime>`);
            });

            it("Format HH:mm:ss", () => {
                const dt = new XAdES.xml.XadesDateTime();
                dt.Value = DATE;
                dt.Format = "HH:mm:ss";

                const xml = dt.GetXml();
                const test = new XMLSerializer().serializeToString(xml);
                assert.equal(/\<xades\:XadesDateTime xmlns\:xades\=\"http\:\/\/uri\.etsi\.org\/01903\/v1\.3\.2\#"\>\d+\:\d+\:\d+\<\/xades\:XadesDateTime\>/.test(test), true);
            });

        });

    });

});
