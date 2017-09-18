/**
 * Created by hy1 on 2017/9/14.
 */
$(".notice").click(function(){
    var notice = $("#notice").val();
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"notice":notice},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
})

$(".webname").click(function(){
    var webname = $("input[name=webname]").val();
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"webname":webname},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
})
$(".onelevel").click(function(){
    var onelevel = $("input[name=onelevel]").val();
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"onelevel":onelevel},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
})
$(".twolevel").click(function(){
    var twolevel = $("input[name=twolevel]").val();
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"twolevel":twolevel},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
})
$(".costdesu").click(function(){
    var costdesu = $("input[name=costdesu]").val();
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"costdesu":costdesu},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
})
$(".Pscale").click(function(){
    var Pscale = $("input[name=Pscale]").val();
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"Pscale":Pscale},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
})

$(".maxorderamount").click(function(){
    var maxorderamount = $("input[name=maxorderamount]").val();
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"maxorderamount":maxorderamount},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
})

$(".maxuseramount").click(function(){
    var maxuseramount = $("input[name=maxuseramount]").val();
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"maxuseramount":maxuseramount},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
})
$(".minorderamount").click(function(){
    var minorderamount = $("input[name=minorderamount]").val();
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"minorderamount":minorderamount},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
})
$(".registsendbtn").click(function(){
    var registsendcp = $("#registsendcp").val();
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"registsendcp":registsendcp},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
})
$(".setdefdianchabtn").click(function(){
    var defdiancha = $("input[name=defdiancha]").val();
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"defdiancha":defdiancha},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
})
$('.slider-button').click(function() {
    var isopen = $(this).attr('data-isopen');
    if(isopen==0){
        $(this).attr('data-isopen','1');
    }else{
        $(this).attr('data-isopen','0');
    }
    $.ajax({
        type:"post",
        url:"/index.php/Admin/Super/esystem.html",
        data:{"isopen":isopen},
        success:function(data){
            alert(data);
        },
        error:function(data){
            alert(data);
        }
    });
    if ($(this).hasClass("on")) {
        $(this).removeClass('on').html($(this).data("off-text"));
        $('.slider-frame').css('background-color','#d5dde4');
        $('.slider-frame span	').css('color','#f00');
    } else {
        $(this).addClass('on').html($(this).data("on-text"));
        $('.slider-frame').css('background-color','#468847');
        $('.slider-frame span').css('color','#7e91aa');
    }
    if ($('.setopen').hasClass("on")) {
        $('.setopen').removeClass('on').html($('.setopen').data("off-text"));
    } else {
        $('.setopen').addClass('on').html($('.setopen').data("on-text"));
    }
});




    //<script src="/Public/Admin/js/bootstrap-wysihtml5-0.0.2.js"></script>
    //<script src="/Public/Admin/js/bootstrap.datepicker.js"></script>
    //<script src="/Public/Admin/js/jquery.uniform.min.js"></script>
    //<script src="/Public/Admin/js/select2.min.js"></script>
    //<script src="/Public/Admin/js/theme.js"></script>
