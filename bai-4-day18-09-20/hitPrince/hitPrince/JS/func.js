document.getElementById("btn").addEventListener("click", () => {
    let V0 = document.getElementById("txtV").value;
    let degree = document.getElementById("txtO").value;
    let Y0 = document.getElementById("txtY").value;
    let R = document.getElementById("txtR").value;
    if (hitPrince(V0, degree, Y0, R)) {
        console.log("true")
        document.getElementById("show").innerHTML = "Trúng, Hoàng Tử đã bị hạ..."
    }
    else {
        console.log("false")
        document.getElementById("show").innerHTML = "không trúng, kiểm tra lại thông số...."
    }
    document.getElementById("txtV").focus();
})

function hitPrince(V0, degree, Y0, R) {
    let V_x0 = V0 * Math.cos(degree * Math.PI / 180);
    let V_y0 = V0 * Math.sin(degree * Math.PI / 180);
    let t_rise = V_y0 / 9.81;
    let H = parseInt(Y0) + V_y0 * t_rise - (0.5 * 9.81 * Math.pow(t_rise, 2));
    let t_fall = Math.sqrt(2 * H / 9.81);
    let t_flight = t_fall + t_rise;
    let r = Math.round(V_x0 * t_flight);
    if (r == R) {
        return true
    }
    return false

}