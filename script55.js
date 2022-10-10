




    function virat(x) {

        return document.getElementById(x);
    }


    function viratClass(x) {

        return document.querySelector(x);
    }
    // variable declrations
    let start = document.querySelector(".start");




    let home = virat("home");
    let groups = virat("groups");
    let profile = virat("profile");
    let gaming = virat("gaming");
    let notifications = virat("notifications");
    let navbar = virat("navbar");
    let line1 = viratClass(".line1");
    let line2 = viratClass(".line2");
    let line3 = viratClass(".line3");
    let line4 = viratClass(".line4");
    let line5 = viratClass(".line5");
    let line6 = viratClass(".line6");
    let topHeader = viratClass(".top_header");
    let grylls = viratClass(".grylls");

    let fb = document.querySelector(".fb");
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("js");
    let htmlfb = document.getElementById("htmlfb");
    let cssfb = document.getElementById("cssfb");
    let jsfb = document.getElementById("jsfb");
    let htmlcnf = virat("htmlconfirm");
    let csscnf = virat("cssconfirm");
    let textarea = viratClass(".third_header textarea");

    let jscnf = virat("jsconfirm");




    let searchbutton = viratClass(".top_header .search");
    let firstlayer = viratClass(".first_layer1");
    let searchjavascript = viratClass(".search_javascript");
    let searchback = virat("sc")
    let messageback = virat("message_back");

    let message_javascript = viratClass(".message_javascript");
    let messenger = viratClass(".messenger");
    let groups_javascript = viratClass(".groups_javascript");
    let groupsback = viratClass(".groupsback");

    let profile_javscript = viratClass(".profile_javscript");
    let profile_back = viratClass(".profile_back")
    let game = viratClass(".game");
    let back = viratClass(".back");
    let terms = viratClass(".terms")
    let confirmButton = viratClass(".customAlert button");
    let motox = viratClass(".motox");
    let gameback = viratClass(".game_back");
    let iframesrc = virat("iframesrc");
    let friend_request = viratClass(".notificatio_request");
    let notifcation_back = viratClass(".notifcation_back");
    let aapkamsg = viratClass(".aapkamsg");
    let aapkamsg_posted = virat("aapkamsg_posted");
    let post1 = viratClass(".post1");
    let post = viratClass(".post");
    let kaa = virat("kaa");
    let messageone = virat("messageone");
    let groupstwo = virat("groupstwo");
    let notificone = virat("notificone");
    let deleteb = viratClass(".deletep button");
    let deletepage = viratClass(".deletep");
    let deleteback = viratClass(".delete_back");
    let livef = virat("livef");
    let photof = virat("photof");
    let checkin = virat("checkf");
    let you_like_aspost = virat("you_like_aspost");
    let you_change_innerhtml = virat("you_change_innerhtml");

    let methumbs = virat("methumbs");
    let melikes = virat("melikes");
    let thumb = virat("thumb");
    let sudc = virat("sudc");
    let suda = virat("suda");

    let santac = virat("santac");
    let santaa = virat("santaa");
    let buttonok = viratClass(".buttonok");
    let security = viratClass(".security");
    let buttonok2 = viratClass(".buttonok2");
    let soloc = virat("soloc");
    let soloa = virat("soloa");
    let password_alert = viratClass(".password_alert");
    let val;
    let login = viratClass(".login");
    let login_button = viratClass(".login_button");
    let password = viratClass(".password");
    let forgot_password = viratClass(".forgot_password");

    function main() {




        santaa.onclick = function () {

            if (santaa.style.display === "block") {
                santaa.style.display = "none";
                santac.style.display = "block";

            } else {

                santaa.style.display = "block";
                santac.style.display = "none";
            }


        }

        santac.onclick = function () {

            if (santaa.style.display === "block") {
                santaa.style.display = "none";
                santac.style.display = "block";

            } else {

                santaa.style.display = "block";
                santac.style.display = "none";
            }


        }






        soloa.onclick = function () {

            if (soloa.style.display === "block") {
                soloa.style.display = "none";
                soloc.style.display = "block";

            } else {

                soloa.style.display = "block";
                soloc.style.display = "none";
            }


        }

        soloc.onclick = function () {

            if (soloa.style.display === "block") {
                soloa.style.display = "none";
                sloc.style.display = "block";

            } else {

                soloa.style.display = "block";
                soloc.style.display = "none";
            }


        }








        suda.onclick = function () {

            if (suda.style.display === "block") {
                suda.style.display = "none";
                sudc.style.display = "block";

            } else {

                suda.style.display = "block";
                sudc.style.display = "none";
            }


        }

        sudc.onclick = function () {

            if (suda.style.display === "block") {
                suda.style.display = "none";
                sudc.style.display = "block";

            } else {

                suda.style.display = "block";
                sudc.style.display = "none";
            }


        }









        thumb.onclick = function () {



            thumb.onclick = function () {


                thumb.style.color = "#4967A9";
                thumb.style.fontWeight = "600";

            }
        }


        methumbs.onclick = function () {


            if (melikes.innerHTML === "Anushka Sharma and 999 others") {




                methumbs.style.color = "#4967A9";
                melikes.innerHTML = "You,Anushka Sharma and 999 others";


            } else {
                methumbs.style.color = "#212529";


                melikes.innerHTML = "Anushka Sharma and 999 others";

            }

        }









        you_like_aspost.onclick = function () {

            if (you_change_innerhtml.innerHTML === "You and 51k others") {

                you_like_aspost.style.color = "#212529";
                you_change_innerhtml.innerHTML = "51k others";

            } else {
                you_like_aspost.style.color = "#4967A9";
                you_change_innerhtml.innerHTML = "You and 51k others";
                // you_like_aspost.style.fontWeight="600"; 

            }



        }




        livef.onclick = function () {
            Swal.fire('Not Supported')

        }

        photof.onclick = function () {
            Swal.fire('Not Supported')

        }

        checkf.onclick = function () {
            Swal.fire('Not Supported')

        }







        htmlcnf.onclick = function () {

            if (htmlcnf.innerHTML === "Confirm") {
                htmlcnf.innerHTML = "Confirmed";
                htmlcnf.style.background = "grey";

            } else {
                htmlcnf.innerHTML = "Confirm";
                htmlcnf.style.background = "#1773EA";

            }
        }

        csscnf.onclick = function () {

            if (csscnf.innerHTML === "Confirm") {
                csscnf.innerHTML = "Confirmed";
                csscnf.style.background = "grey";
            } else {
                csscnf.innerHTML = "Confirm";
                csscnf.style.background = "#1773EA";

            }
        }



        jscnf.onclick = function () {

            if (jscnf.innerHTML === "Confirm") {
                jscnf.innerHTML = "Confirmed";
                jscnf.style.background = "grey";
            } else {
                jscnf.innerHTML = "Confirm";
                jscnf.style.background = "#1773EA";

            }
        }








        textarea.onclick = function () {
            firstlayer.setAttribute('style', 'position:absolute;display:none');
            aapkamsg.style.display = "block";


            aapkamsg_posted.onclick = function () {
                let origcomments = document.getElementById("texta").value;


                var cln = post1.cloneNode(true);
                kaa.innerHTML = origcomments;

                post.insertBefore(cln, post1);

                firstlayer.setAttribute('style', 'position:static;display:block');
                aapkamsg.style.display = "none";







            }






        }









        messenger.onclick = function () {
            messageone.style.visibility = "hidden";
            firstlayer.setAttribute('style', 'position:absolute;display:none');
            message_javascript.style.display = "block";

            messageback.onclick = function () {
                firstlayer.setAttribute('style', 'position:static;display:block');

                message_javascript.style.display = "none";

            }


        }


        searchbutton.onclick = function () {

            firstlayer.setAttribute('style', 'position:absolute;display:none');
            searchjavascript.style.display = "block";


            grylls.setAttribute('style', 'animation: bounce-in-top 1.1s both;animation-delay:2s');
            searchback.onclick = function () {
                firstlayer.setAttribute('style', 'position:static;display:block');
                searchjavascript.style.display = "none";

            }

        }



        home.onclick = function () {


            line1.style.visibility = "visible";
            line2.style.visibility = "hidden";
            line3.style.visibility = "hidden";
            line4.style.visibility = "hidden";
            line5.style.visibility = "hidden";
            line6.style.visibility = "hidden";


        }

        groups.onclick = function () {
            groupstwo.style.visibility = "hidden";
            line2.style.visibility = "visible";
            line1.style.visibility = "hidden";
            line3.style.visibility = "hidden";
            line4.style.visibility = "hidden";
            line5.style.visibility = "hidden";
            line6.style.visibility = "hidden";
            firstlayer.setAttribute('style', 'position:absolute;display:none');
            groups_javascript.style.display = "block";
            groupsback.onclick = function () {
                firstlayer.setAttribute('style', 'position:static;display:block');
                groups_javascript.style.display = "none";

            }
        }

        profile.onclick = function () {

            line3.style.visibility = "visible";
            line1.style.visibility = "hidden";
            line2.style.visibility = "hidden";
            line4.style.visibility = "hidden";
            line5.style.visibility = "hidden";
            line6.style.visibility = "hidden";

            firstlayer.setAttribute('style', 'position:absolute;display:none');
            profile_javscript.style.display = "block";

            profile_back.onclick = function () {
                firstlayer.setAttribute('style', 'position:static;display:block');

                profile_javscript.style.display = "none";

            }



        }
        gaming.onclick = function () {

            line4.style.visibility = "visible";
            line1.style.visibility = "hidden";
            line3.style.visibility = "hidden";
            line2.style.visibility = "hidden";
            line5.style.visibility = "hidden";
            line6.style.visibility = "hidden";

            firstlayer.setAttribute('style', 'position:absolute;display:none');
            terms.style.display = "block";
            confirmButton.onclick = function () {
                iframesrc.src = "https://html5.gamedistribution.com/bcacf81441bd4c7799a622171116ea9d/";
                terms.style.display = "none";







                motox.style.display = "block";

                gameback.onclick = function () {
                    iframesrc.src = "";
                    firstlayer.setAttribute('style', 'position:static;display:block');


                    motox.style.display = "none";
                }









            }









        }

        notifications.onclick = function () {
            notificone.style.visibility = "hidden";
            line5.style.visibility = "visible";
            line1.style.visibility = "hidden";
            line3.style.visibility = "hidden";
            line4.style.visibility = "hidden";
            line2.style.visibility = "hidden";
            line6.style.visibility = "hidden";


            firstlayer.setAttribute('style', 'position:absolute;display:none');
            friend_request.style.display = "block";
            notifcation_back.onclick = function () {
                firstlayer.setAttribute('style', 'position:static;display:block');
                friend_request.style.display = "none";

            }
        }






        navbar.onclick = function () {
            firstlayer.setAttribute('style', 'position:absolute;display:none');
            deletepage.style.display = "block";
            line6.style.visibility = "visible";
            line1.style.visibility = "hidden";
            line3.style.visibility = "hidden";
            line4.style.visibility = "hidden";
            line5.style.visibility = "hidden";
            line2.style.visibility = "hidden";

            deleteback.onclick = function () {

                firstlayer.setAttribute('style', 'position:static;display:block');
                deletepage.style.display = "none";

            }


        }



        $(".bottom-navigation-item").click(function () {
            $(".bottom-navigation-item").removeClass("active");
            $(this).addClass("active");
        });


        $('.story').owlCarousel({
            center: false,
            items: 3,
            loop: true,
            margin: 5,
            stagePadding: 15,




        });
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })








        html.onclick = function () {
            htmlfb.style.display = "none";
        }

        css.onclick = function () {
            cssfb.style.display = "none";
        }

        js.onclick = function () {
            jsfb.style.display = "none";
        }


    }

    function random_password() {

        val = Math.floor(1000 + Math.random() * 9000);
        security.innerHTML = val;
        start.style.display = "none";
        password_alert.style.display = "block";
        buttonok2.onclick = function () {

            password_alert.style.display = "none";

            login.style.display = "block";

            login_button.onclick = function () {

                if (parseInt(password.value, 10) == val)

                {
                    login.style.display = "none";
                    firstlayer.setAttribute('style', 'position:static;display:block');
                    main();

                } else {

                    Swal.fire('Invalid Password');

                }



            }

            forgot_password.onclick = function ()

            {
                password_alert.style.display = "block";
                buttonok2.onclick = function () {
                    password_alert.style.display = "none";

                }

            }

        }

    }

    random_password();









    deleteb.onclick = function () {


        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You will have to login again to restore account ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your Account has been deleted.',
                    'success'
                );

                firstlayer.setAttribute('style', 'position:absolute;display:none');
                deletepage.style.display = "none";

            } else if (

                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Account is safe :)',
                    'error'
                );

                firstlayer.setAttribute('style', 'position:static;display:block');
                deletepage.style.display = "none";



            }
        })

    }

    //delete.onclick=deleteaccnt();
}
