// Find all checkboxes within the div with the specified class
const checkboxes = document.querySelectorAll('.css-175oi2r.r-f8sm7e.r-13qz1uu.r-1ye8kvj input[type="checkbox"].r-1p0dtai.r-1pi2tsx.r-1d2f490.r-crgep1.r-orgf3d.r-t60dpp.r-u8s1d.r-zchlnj.r-ipm5af.r-13qz1uu.r-1ei5mc7');

checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
        checkbox.click();
    }
});
