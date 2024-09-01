function one() {
        //for bg
        document.querySelector("#first_sho1").classList.add("animation1");
        document.querySelector("#first_sho").classList.add("animation2");
        document.body.style.backgroundColor = "rgba(132, 164, 211, 255)";
        //for a circle
        document.querySelector(".round_two").style.display = "none";
        document.querySelector(".round_one").style.display = "block";
        //for a shoes
        document.querySelector(".img_one_main").style.display = "block";
        document.querySelector(".img_two_main").style.display = "none";
        //for text
        document.querySelector(".text-main_one").style.display = "block";
        document.querySelector(".text-main_two").style.display = "none";
        setTimeout(() => {
                document.querySelector("#first_sho1").classList.remove("animation1");
                document.querySelector("#first_sho").classList.remove("animation2");

        }, 4000);
}
function two() {

        document.querySelector("#second_sho").classList.add("animation2");
        document.querySelector("#second_sho1").classList.add("animation1");
        // for bg
        document.body.style.backgroundColor = "rgba(233, 221, 195, 255)";
        // for a circle
        document.querySelector(".round_two").style.display = "block";
        document.querySelector(".round_one").style.display = "none";
        //for a shoes
        document.querySelector(".img_one_main").style.display = "none";
        document.querySelector(".img_two_main").style.display = "block";
        //for text
        document.querySelector(".text-main_one").style.display = "none";
        document.querySelector(".text-main_two").style.display = "block";
        setTimeout(() => {
                document.querySelector("#second_sho").classList.remove("animation2");
                document.querySelector("#second_sho1").classList.remove("animation1");

        }, 4000);



}