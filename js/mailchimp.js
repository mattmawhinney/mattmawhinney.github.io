$('#mc-form').ajaxChimp({
    url: '//groovemiami.us12.list-manage.com/subscribe/post?u=22fd644937cf748d3918a60dd&amp;id=be31c5bb2d',
    callback: callbackFunction
});


function callbackFunction (resp) {
    $('#mc-form').hide();
    if (resp.result === 'success') {
        console.log(resp.msg);
       $('#email-alert').addClass("alert alert-danger").append(resp.msg);
    } else {
      $('#email-alert').addClass("alert alert-danger").append("It looks like you've already signed up. Hooray!");
    }
}