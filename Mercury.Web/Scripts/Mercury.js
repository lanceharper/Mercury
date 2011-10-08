/// <reference path="jquery-1.6.4.js" />
/// <reference path="jQuery.tmpl.js" />
/// <reference path="jquery.cookie.js" />

$(function () {

    $.fn.adjustPanel = function () {
        $(this).find("ul, .subpanel").css({ 'height': 'auto' }); //Reset sub-panel and ul height

        var windowHeight = $(window).height(); //Get the height of the browser viewport
        var panelsub = $(this).find(".subpanel").height(); //Get the height of sub-panel
        var panelAdjust = windowHeight - 100; //Viewport height - 100px (Sets max height of sub-panel)
        var ulAdjust = panelAdjust - 25; //Calculate ul size after adjusting sub-panel

        if (panelsub > panelAdjust) { //If sub-panel is taller than max height...
            $(this).find(".subpanel").css({ 'height': panelAdjust }); //Adjust sub-panel to max height
            $(this).find("ul").css({ 'height': panelAdjust }); ////Adjust subpanel ul to new size
        }
        else { //If sub-panel is smaller than max height...
            $(this).find("ul").css({ 'height': 'auto' }); //Set sub-panel ul to auto (default size)
        }
    };

    $(".instantmessage").adjustPanel();

    $(window).resize(function () {
        $(".instantmessage").adjustPanel();
    });

    $(".instantmessage a").click(function () { //If clicked on the first link of #chatpanel and #alertpanel...

        if ($(this).next(".subpanel").is(':visible')) { //If subpanel is already active...
            $(this).next(".subpanel").hide(); //Hide active subpanel
            $("#footer li a").removeClass('active'); //Remove active class on the subpanel trigger
        }
        else { //if subpanel is not active...

            $(".subpanel").hide(); //Hide all subpanels
            $(this).next(".subpanel").toggle(); //Toggle the subpanel to make active
            $("#footer li a").removeClass('active'); //Remove active class on all subpanel trigger
            $(this).toggleClass('active'); //Toggle the active class on the subpanel trigger
        }

        return false; //Prevent browser jump to link anchor
    });

    $(".instantmessage a").live("click", function (e) { //If clicked on the first link of #chatpanel and #alertpanel...

        if ($(this).next(".subpanel").is(':visible')) { //If subpanel is already active...
            $(this).next(".subpanel").hide(); //Hide active subpanel
            $("#footer li a").removeClass('active'); //Remove active class on the subpanel trigger
        }
        else { //if subpanel is not active...
            $(".subpanel").hide(); //Hide all subpanels
            $(this).next(".subpanel").toggle(); //Toggle the subpanel to make active
            $("#footer li a").removeClass('active'); //Remove active class on all subpanel trigger
            $(this).toggleClass('active'); //Toggle the active class on the subpanel trigger
        }
        e.stopPropogation();
        return false; //Prevent browser jump to link anchor
    });

    $(".hide").live("click", function () {
        $(this).parent().parent().hide();
        $("#footer li a").removeClass('active');
    });

    //Click event outside of subpanel
    //    $(document).click(function () { //Click anywhere and...

    //        $(".subpanel").hide(); //hide subpanel
    //        $("#footer li a").removeClass('active'); //remove active class on subpanel trigger
    //    });

    $('.subpanel ul').click(function (e) {

        e.stopPropagation(); //Prevents the subpanel ul from closing on click
    });

    $('.subpanel ul').live('click', function (e) {

        e.stopPropagation(); //Prevents the subpanel ul from closing on click
    });

//    var messagehub = $.connection.messagehub;

//    function addMessage(content, type) {
//        //alert('ok');
//    }

//    messagehub.displayMessage = function (message) {
//        //alert(message);
//    };

//    messagehub.addChat = function (message) {

//        displayChatWindow(message);
//    };

    // Start the connection
//    $.connection.hub.start(function () {
//        messagehub
//                    .join()
//                    .fail(function (e) {
//                        addMessage(e, 'error');
//                    })
//                    .done(function (success) {
//                        if (success === false) {
//                            //$.cookie('userid', '');

//                        }
//                        console.log(success);
//                        //addMessage('Yes!');
//                    });
//        //messagehub.groin();
//        messagehub.clientsend('stuff');
//    });

    $("#send-button").click(function () {
        //messagehub.clientsend('stuff');
    });

    $('#dialog').dialog({
        autoOpen: false,
        width: 600,
        height: 300,
        buttons: {
            "Send": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        },
        modal: true
    });
});

function displayChatWindow(message) {

    if ($(".sender_" + message.Number).length > 0) { // Window is already open for this recipient
        $(".sender_" + message.Number + " a").addClass('active');
        $(".sender_" + message.Number + " div #messagehistory").append("<li><p><strong>" + message.Name + ": </strong>" + message.Content + "</p></li>");
    }
    else {

        $("#instantmessage-template").tmpl(message).appendTo("#mainpanel"); // Create a new chat container
    }
    return $(".sender_" + message.Number + " a");
}

function sendText(id) {
    var message = { Content: null, Name: "John Doe", Number: id };
    var sender = displayChatWindow(message);
    $(".subpanel").hide(); //Hide all subpanels
    sender.next(".subpanel").toggle(); //Toggle the subpanel to make active
    $("#footer li a").removeClass('active'); //Remove active class on all subpanel trigger
    sender.toggleClass('active'); //Toggle the active class on the subpanel trigger
    return false;
}