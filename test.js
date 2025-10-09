import { describe, it } from "mocha";
import assume from "assume";
import * as colorspaceModule from "./dist/index.cjs";
const colorspace = colorspaceModule.default;

describe("colorspace", function () {
  it('returns a consistent color for a given name', function () {
    assume(colorspace('bigpipe')).equals('#20f95a');
    assume(colorspace('bigpipe')).equals('#20f95a');
    assume(colorspace('bigpipe')).equals('#20f95a');
  });

  it('tones the color when namespaced by a : char', function () {
    assume(colorspace('bigpipe:pagelet')).equals('#00FF2C');
  });
});