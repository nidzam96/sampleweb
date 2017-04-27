/*
Custom Javascript Function
jQuery Function
*/
$(document).ready( function () {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(document).ready( function () {
    $(window).bind("load resize", function() {
        closetip();
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});

$(document).ready( function () {
    window.setTimeout(function() {
        $('.alert.alert-success' ).fadeTo(200, 0).slideUp(100, function(){
              $(this).modal('hide'); 
        });         
    }, 2000);

    $('.frmenter').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13') {
            // alert('You pressed a "enter" key in somewhere'); 
            $('.btn-submit').click();  
            $('.btn-saveprod').click();
            return false;            
        }
        else {
            closetip();
        }
    });

    // $('.frmrequired').click(function () {
    //     // closetip();
    // });

    // $('.frmrequired').keyup(function () {
    //     closetip();
    // });

    // $('.frmrequired').keydown(function () {
    //     closetip();
    // });

	$('#btnlogin').click(function() {
		//closetip();	
        var frm=this.form.name;
        var f=document.getElementById(frm);
        var action=f.action;

        if (f.inpusername.value.length==0 || f.inpusername.value=='' ) {
            var msg=f.inpusername.name+"|Please enter "+f.inpusername.title;
            //hashlink('inpusername');
            f.inpusername.focus();         
            //showtip(frm,msg);         
            return false;
        }    

        if (f.inppwd.value.length==0 || f.inppwd.value=='' ) {
            var msg=f.inppwd.name+"|Please enter "+f.inppwd.title;
            //hashlink('inppwd');
            f.inppwd.focus();         
            //showtip(frm,msg);         
            return false;
        }

		///----all true
        //btnloader('on');
        //divprocessing('on'); 
        f.submit();
        //var str = $('#dataForm').serialize();
        //ajaxprocreq('login',action,'dataForm',str);   
		return true;		
	});

    $('.btn-submit').click(function() {
        closetip();   
        var frm=this.form.name;
        var f=document.getElementById(frm);
        var action=f.action;
        var ret=false;
        var btnid=this.id;

        if (f.elements['_token']) {
            f.elements['_token'].id='frmtoken';
        }

        ret=validateForm('proc',frm);
        if (ret) {
            if (btnid=='btngenrpt') {
                btnloader('off');
                divprocessing('off');
            }
            else {
                btnloader('on');
                divprocessing('on');                
            }
            f.submit();        
            return true;            
        }
        else {
            return false;
        }      
    });

    $('.btn-saveprod').click(function() {
        closetip();   
        var frm=this.form.name;
        var f=document.getElementById(frm);
        var action=f.action;
        var ret=false;
        var btnid=this.id;

        if (f.inpprodbarcode.value.length==0 || f.inpprodbarcode.value=='') {  
            var msg=f.inpprodbarcode.name+"|Enter "+f.inpprodbarcode.title;                  
            hashlink(f.inpprodbarcode.id);
            f.inpprodbarcode.focus();  
            showtip(frm,msg);   
            return false;
        } //end if n=null

        if (f.inpprodbarcode.value!='' && !isNumber(f.inpprodbarcode.value)) {
            var msg=f.inpprodbarcode.name+"|Numbers only";                  
            hashlink(f.inpprodbarcode.id);
            f.inpprodbarcode.focus(); 
            showtip(f.name,msg);   
            return false;
        }        

        if (f.inpprodesc.value.length==0 || f.inpprodesc.value=='') {  
            var msg=f.inpprodesc.name+"|Enter "+f.inpprodesc.title;                  
            hashlink(f.inpprodesc.id);
            f.inpprodesc.focus();  
            showtip(f.name,msg);   
            return false;
        } //end if n=null

        if (f.inpunitprice1.value.length==0 || f.inpunitprice1.value=='') {  
            var msg=f.inpunitprice1.name+"|Enter "+f.inpunitprice1.title;                  
            hashlink(f.inpunitprice1.id);
            f.inpunitprice1.focus();  
            showtip(f.name,msg);   
            return false;
        } //end if n=null

        if (f.inpunitprice1.value!='' && !isNumber(f.inpunitprice1.value)) {
            var msg=f.inpunitprice1.name+"|Numbers only";                  
            hashlink(f.inpunitprice1.id);
            f.inpunitprice1.focus(); 
            showtip(f.name,msg);   
            return false;
        }

        if (f.inpsellprice.value.length==0 || f.inpsellprice.value=='') {  
            var msg=f.inpsellprice.name+"|Enter "+f.inpsellprice.title;                  
            hashlink(f.inpsellprice.id);
            f.inpsellprice.focus();  
            showtip(f.name,msg);   
            return false;
        } //end if n=null

        if (f.inpsellprice.value!='' && !isNumber(f.inpsellprice.value)) {
            var msg=f.inpsellprice.name+"|Numbers only";                  
            hashlink(f.inpsellprice.id);
            f.inpsellprice.focus(); 
            showtip(f.name,msg);   
            return false;
        }

        if (f.inpprodcurrstock.value.length==0 || f.inpprodcurrstock.value=='') {  
            var msg=f.inpprodcurrstock.name+"|Enter "+f.inpprodcurrstock.title;                  
            hashlink(f.inpprodcurrstock.id);
            f.inpprodcurrstock.focus();  
            showtip(f.name,msg);   
            return false;
        } //end if n=null

        if (f.inpprodcurrstock.value!='' && !isNumber(f.inpprodcurrstock.value)) {
            var msg=f.inpprodcurrstock.name+"|Numbers only";                  
            hashlink(f.inpprodcurrstock.id);
            f.inpprodcurrstock.focus(); 
            showtip(f.name,msg);   
            return false;
        }

        if (f.inpprodreorder.value.length==0 || f.inpprodreorder.value=='') {  
            var msg=f.inpprodreorder.name+"|Enter "+f.inpprodreorder.title;                  
            hashlink(f.inpprodreorder.id);
            f.inpprodreorder.focus();  
            showtip(f.name,msg);   
            return false;
        } //end if n=null

        if (f.inpprodreorder.value!='' && !isNumber(f.inpprodreorder.value)) {
            var msg=f.inpprodreorder.name+"|Numbers only";                  
            hashlink(f.inpprodreorder.id);
            f.inpprodreorder.focus(); 
            showtip(f.name,msg);   
            return false;
        }

        if (f.inpremark.value.length==0 || f.inpremark.value=='') {  
            var msg=f.inpremark.name+"|Enter "+f.inpremark.title;                  
            hashlink(f.inpremark.id);
            f.inpremark.focus();  
            showtip(f.name,msg);   
            return false;
        } //end if n=null

        //--supplier
        var currli=$('#csdflist li').length;
        var stock=parseInt(f.inpprodcurrstock.value);
        if (stock=='') {
            stock=0;
        }
        var currqty=0;

        if (currli>0) {
            $('#csdflist li').each(function() {
                var thisid=this.id;
                var arrid=thisid.split('_');
                var idx=arrid[1];
                var supplier='inpsuppid_'+idx;
                var invno='inpinvno_'+idx;
                var qty='inpqty_'+idx;

                    if ( $('#'+supplier).val()=='-1') {
                        var msg=supplier+"|Select Supplier";                  
                        hashlink(supplier);
                        $('#'+supplier).focus();  
                        showtip(f.name,msg);   
                        return false;
                    }

                    if ( $('#'+invno).val()=='') {
                        var msg=invno+"|Enter Invoice No.";                  
                        hashlink(invno);
                        $('#'+invno).focus();  
                        showtip(f.name,msg);   
                        return false;
                    }

                    if ( $('#'+invno).val()!='' && !isNumber($('#'+invno).val())) {
                        var msg=invno+"|Numbers only";                  
                        hashlink(invno);
                        $('#'+invno).focus();  
                        showtip(f.name,msg);   
                        return false;
                    }

                    if ( $('#'+qty).val()=='') {
                        var msg=qty+"|Enter Quantity";                  
                        hashlink(qty);
                        $('#'+qty).focus();  
                        showtip(f.name,msg);   
                        return false;
                    }

                    if ( $('#'+qty).val()!='' && !isNumber($('#'+qty).val())) {
                        var msg=qty+"|Numbers only";                  
                        hashlink(qty);
                        $('#'+qty).focus();  
                        showtip(f.name,msg);   
                        return false;
                    }

                    currqty=currqty+parseInt($('#'+qty).val());                                              
            });

            if (currqty!=stock) {
                var msg="fldsetsupp|Quantity=StocksOnHand ?";                  
                hashlink('fldsetsupp');
                $('#fldsetsupp').focus();  
                showtip(f.name,msg);   
                return false;                
            }
        } //end if--

        btnloader('on');
        divprocessing('on'); 
        f.submit();
        return true;
    });

    //
    $("body").on('click','#report-export-csv', function() {
        var param='?q=1';
        var url=$(this).attr('data-id');
        var dataset=$(this).attr('data-name');
        param=param+'&dataset='+dataset;

        url=url+param;
        window.location.href=url;
    });
    //

    $("body").on('click','#export-csv,#export-xls,#export-pdf',function(){        
        var param='?q=1';
        var url=$(this).attr('data-name');
        $('.search-input-text').each(function()  {
          var i =$(this).attr('data-column');  // getting column index
          var v =$(this).val();  // getting search input value
          param=param+'&columns['+i+'][search][value]='+v;
        });

        $('.search-input-select').each(function()  {
          var i =$(this).attr('data-column');  // getting column index
          var v =$(this).val();  // getting search input value
          param=param+'&columns['+i+'][search][value]='+v;
        });

        url=url+param;
        //alert(url);
        window.location.href=url;
    });    

    $("body").on('click','.btn.btn-default.btn-print',function(){
        var param='?q=1';
        var url=$(this).attr('data-id');
        $('.search-input-text').each(function()  {
          var i =$(this).attr('data-column');  // getting column index
          var v =$(this).val();  // getting search input value
          param=param+'&columns['+i+'][search][value]='+v;
        });

        $('.search-input-select').each(function()  {
          var i =$(this).attr('data-column');  // getting column index
          var v =$(this).val();  // getting search input value
          param=param+'&columns['+i+'][search][value]='+v;
        });

        url=url+param;
        window.open(url);
    });

    $("body").on('click','.btn.btn-sm.btn-danger.btn-delsel',function(){
        var f=document.getElementById('dataForm');    
        var id=$(this).attr('data-id');
        var item=$(this).attr('data-name');

        f.action=id;
        $('#item').html('Deleting "'+item+'" ...');
        $('#deleteModal').modal('show');
    });

    $("body").on('click','.btn.btn-default.btn-delall',function(){
        var f=document.getElementById('dataForm');    
        var id=$(this).attr('data-id');
        var item=$(this).attr('data-name');

        f.action=id;
        $('#item').html('Deleting all '+item+' ...');
        $('#deleteModal').modal('show');
    });

    $('#btnyesdel').click( function () {
        var f=document.getElementById('dataForm');
        var action=f.action;

        btnloader('on');
        divprocessing('on'); 
        //f.submit();
        var str = $('#dataForm').serialize();
        ajaxprocreq('delete',action,'dataForm',str);    
        return true; 
    });    

    $("body").on('click','.btn.btn-sm.btn-success.btn-accept',function(){
        var f=document.getElementById('transferForm'); 

        var url=$(this).attr('data-url');  
        var barcode=$(this).attr('data-barcode');
        var quantity=$(this).attr('data-quantity');
        var branchto=$(this).attr('data-branchto');
        var action=url;
        f.action=url;

        btnloader('on');
        divprocessing('on'); 
        //f.submit();
        var str = $('#transferForm').serialize();
        ajaxprocreq('delete',action,'transferForm',str);    
        return true;
    });

    $("body").on('click','.btn.btn-sm.btn-warning.btn-denied',function(){
        var f=document.getElementById('transferForm'); 

        var url=$(this).attr('data-url');  
        var barcode=$(this).attr('data-barcode');
        var quantity=$(this).attr('data-quantity');
        var branchto=$(this).attr('data-branchto');
        f.action=url;

        $('#barcode').html(barcode);
        $('#quantity').html(quantity);
        $('#branchto').html(branchto);

        $('#deniedModal').modal('show');
    });

    $('#btnyesdenied').click( function () {
        var f=document.getElementById('transferForm');
        var action=f.action;

        if (f.inpremark.value=='') {
            alert('Please enter Remarks');
            //hashlink('inppwd');
            f.inpremark.focus();         
            return false;            
        }

        btnloader('on');
        divprocessing('on'); 
        //f.submit();
        var str = $('#transferForm').serialize();
        ajaxprocreq('delete',action,'transferForm',str);    
        return true; 
    });
}); //end doc ready func

function ajaxprocreq(proctype,strurl,frmname,strdata) {
    $.ajax({
        type: "POST",  
        url: strurl,  
        data: strdata,
        beforeSend: function(){
        },
        success: function(resp){
            btnloader('off');
            divprocessing('off','');            
            var msg=resp.split('|');

            $('#title').html(msg[0]);
            $('#msgtext').html(msg[1]);
            $('#infoModal').modal('show');
            removeInfoModal();
            
            if (proctype=='delete') { 
                $('#'+msg[2]).DataTable().draw();
            }
        },
        error: function(e){
        },
        complete: function(resp){
        }
    });
} //end function

function validateForm(proc,frmname) {
 var f=document.getElementById(frmname); 
 var ret=false;

 for (var n=0; n < f.elements.length; n++) {
    var elemtype=f.elements[n].type;

    if ( $('#'+f.elements[n].id).hasClass('frmrequired') ) {
        
        switch (elemtype) {
            case 'text':
                if (f.elements[n].value.length==0 || f.elements[n].value=='') {  
                    var msg=f.elements[n].name+"|Enter "+f.elements[n].title;                  
                    if (proc=='modal') {
                    } //end if proc                 
                    else {
                        hashlink(f.elements[n].id);
                    } //end else proc

                    f.elements[n].focus();  
                    showtip(f.name,msg);   
                    ret=false;
                    return false;
                } //end if n=null
                
                if ( $('#'+f.elements[n].id).hasClass('frmemail') ) {
                    var x = f.elements[n].value;
                    var atpos = x.indexOf("@");
                    var dotpos = x.lastIndexOf(".");
                    if (x!='' && (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)) {
                        var msg=f.elements[n].name+"|Invalid Email";
                        hashlink(f.elements[n].id);
                        f.elements[n].focus();
                        showtip(frmname,msg);    
                        ret=false;                 
                        return false; 
                    }
                } //end if frmemail

                if ($('#'+f.elements[n].id).hasClass('frmnum')) {
                    if (f.elements[n].value!='' && !isNumber(f.elements[n].value)) {
                        var msg=f.elements[n].name+"|Numbers only";
                        hashlink(f.elements[n].id);
                        f.elements[n].focus();  
                        showtip(frmname,msg);   
                        ret=false;
                        return false;
                    }
                } //end if isNumber 
                break;          
            case 'password':
                if (f.elements[n].value.length==0 || f.elements[n].value=='') {
                    var msg=f.elements[n].name+"|Enter "+f.elements[n].title;
                    hashlink(f.elements[n].id);
                    f.elements[n].focus();  
                    showtip(frmname,msg);   
                    ret=false;
                    return false;
                }
                break;
            case 'textarea':
                if (f.elements[n].value.length==0 || f.elements[n].value=='') {
                    var msg=f.elements[n].name+"|Enter "+f.elements[n].title;
                    hashlink(f.elements[n].id);
                    f.elements[n].focus();  
                    showtip(frmname,msg);   
                    ret=false;
                    return false;
                }
                break; 
            case 'select-one':
                if (f.elements[n].value=='-1') {                    
                    var msg=f.elements[n].name+"|Select  "+f.elements[n].title;
                    hashlink(f.elements[n].id);
                    f.elements[n].focus();  
                    showtip(frmname,msg);   
                    ret=false;
                    return false;
                }
                break;                  
            case 'radio':
                if (f.elements[n].value.length==0 || f.elements[n].value=='') {
                    var msg=f.elements[n].name+"|Select  "+f.elements[n].title;
                    hashlink(f.elements[n].id);
                    f.elements[n].focus();  
                    showtip(frmname,msg);   
                    ret=false;
                    return false;
                }
                break;
            case 'checkbox':
                if (f.elements[n].checked==false) {
                    var msg=f.elements[n].id+"_cbox"+"|Tick "+f.elements[n].title;
                    hashlink(f.elements[n].id+"_cbox");
                    //f.elements[n].focus();    
                    showtip(frmname,msg);   
                    ret=false;
                    return false;
                }
                break;                                                          
            default:
                ret=true;
                return true;
                break;
        } //end swi

    } //end if frmrequired
    
    if ( $('#'+f.elements[n].id).hasClass('frmemail') ) {
        var x = f.elements[n].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (x!='' && (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)) {
            var msg=f.elements[n].name+"|Invalid Email";
            hashlink(f.elements[n].id);
            f.elements[n].focus();
            showtip(frmname,msg);    
            ret=false;                 
            return false; 
        }

        // var mailformat=\^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/;
        // if (f.elements[n].value!='' && !f.elements[n].value.match(mailformat) )  {
        //     var msg=f.elements[n].name+"|Invalid Email";
        //     hashlink(f.elements[n].id);
        //     f.elements[n].focus();
        //     showtip(frmname,msg);    
        //     ret=false;                 
        //     return false;           
        // } //end if
    } //end if frmemail
    
    if ( $('#'+f.elements[n].id).hasClass('frmnum') ) {
        if (f.elements[n].value!='' && !isNumber(f.elements[n].value)) {
            var msg=f.elements[n].name+"|Numbers only";
            hashlink(f.elements[n].id);
            f.elements[n].focus();  
            showtip(frmname,msg);   
            ret=false;
            return false;
        } //end if isNumber
    } //end if frmnum

    // else {
    ret=true;
    //return true;
    // } //end else

 } //end for 

 return ret;
} //end func

function hashlink(anchornm) {
//----internal navigation
    $(document).ready(function() {
         $('html, body').animate({
           'scrollTop':   $('#'+anchornm).offset().top-100
         }, 200);
    });
} //end func

//-----------------------------------------------------------------------------
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
} //end func

//--------------------ToolTip-------------------------------------------------------------------------------
function showtip(frm,rmsg) {
    var rdata=rmsg.split('|');
    var namaobj=rdata[0];
    var msg=rdata[1];

    fixToolTipColor();
    //$('#'+namaobj).focus();
    var xpos=$('#'+namaobj).offset();
    $('#'+frm).add('#tipmsg').css('top', xpos.top-45);
    $('#'+frm).add('#tipmsg').css('left', xpos.left+10); 
    //$('#tipimg').removeClass("tipnoimg").addClass("tipshowimg");  
    $('#tipdesc').html(msg);    
    $('#tipmsg').removeClass("hide").addClass("show");
    $('#tipmsg').addClass("message_error");
    $('#tipmsg').fadeIn('fast');
    animateMessageContainer();

} //end function

function fixToolTipColor(){
    //grab the bg color from the tooltip content - set top border of pointer to same
    $('.fg-tooltip-pointer-down-inner').each(function(){
        var bWidth = $('.fg-tooltip-pointer-down-inner').css('borderTopWidth');
        var bColor = $(this).parents('.fg-tooltip').css('backgroundColor')
        $(this).css('border-top', bWidth+' solid '+bColor);
        }); 
} //end function

function closetip() {
    $('#tipdesc').html('');
    $('#tipmsg').fadeOut('slow');
    $('#tipmsg').removeClass("message_error");
    $('#tipmsg').removeClass("show").addClass("hide");
} //end function

//Animate left and right the error message
//Kinda fun...
function animateMessageContainer(){
        setTimeout(function(){
                $(".message_error").animate({
                    marginLeft : "10px"
                }, 100, function(){
                    $(this).animate({
                        marginLeft : "-10px"
                    }, 100, function(){
                        $(this).animate({
                            marginLeft : "10px"
                        }, 100, function(){
                            $(this).animate({
                                marginLeft : "-10px"
                            }, 100, function(){
                                $(this).animate({
                                    marginLeft : "10px"
                                }, 100, function(){
                                    $(this).animate({
                                        marginLeft : "-10px"
                                    }, 100, function(){
                                        $(this).animate({
                                            marginLeft : "0px"
                                        }, 100);
                                    });
                                });
                            });
                        });
                    });
                });
            }, 50);
} //end function
//-------------------End ToolTip----------------------------------------------------------------

/*** -------------------------------------------------------- ***/
function btnloader(v) {
    if (v=='on') {
        $(document.body).css({'cursor' : 'wait'});
        $('#overlay').removeClass('hide').addClass('show');
    }
    else {
        $(document.body).css({'cursor' : 'default'});
        $('#overlay').removeClass('show').addClass('hide');
    }
} //end func

function divprocessing(v) {
    if (v=='on') {
        $(document).ready(function() {
        var b=250;
        $('#popmsg').each(function(){
            $(this).stop().animate({
                'marginRight':'425px'
                },b+=250);
            });          
        }); 
    }
    else {
        removeInfo(3500);
    }
} //end func

function removeInfo(time){
    $('#popmsg').each(function(){
        $(this).stop().animate({
        'marginRight':'-150px'},time);
    });
} //end func

function removeInfoModal(){
  $(document).ready(function() {
      window.setTimeout(function() {
        $('#infoModal').fadeTo(200, 0).slideUp(100, function(){
              $(this).modal('hide'); 
        });         
      }, 2800);      
  });
} //end func
/*** -------------------------------------------------------- ***/

