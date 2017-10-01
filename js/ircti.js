$(function()
{
    /*
    * REQUIRES  :   OPTIONAL options that is an array with
                        - with : the width of the image (exemple: 20px). Default value is 'auto'
                        - height :  the height of the image (exemple 20px). Default value is 'auto'
                        - url_img_check : is the image URL for the checked input. Default value is the image in the folder /img
                        - url_img_no_check : is the image URL for the not checked input. Default value is the image in the folder /img
                    $(jquery-object).ircti() : $(jquery-object) must be an input checkbox or an input radio
    * MODIFIES  :   hide the input and show an image
                    Change the image when the checked value of the input change
    * EFFECTS   :   return this;
    */
    $.fn.ircti = function(options)
    {
        // Check if is input radio or input checkbox
        if((this.attr('type') == 'radio' || this.attr('type') == 'checkbox')
        && $('input[name="'+this.attr('name')+'"]').length > 0)
        {
            var url_img_check =  '../img/checkbox_check_1.png';
            var url_img_no_check = '../img/checkbox_no_check_1.png';
            if(this.attr('type') == 'radio')
            {
                url_img_check =  '../img/radiobox_check_1.png';
                url_img_no_check = '../img/radiobox_no_check_1.png';
            }

            var settings = $.extend({
                height: 'auto',
                width: 'auto',
                url_img_check: url_img_check,
                url_img_no_check: url_img_no_check
            }, options);

            // Replace all input with image
            $.each($('input[name="'+this.attr('name')+'"]'), function()
            {
                var $this = $(this);

                $this.hide();
                if($this.is(':checked')){
                    $this.after('<span data-ircti_lk_id="'+$this.attr('id')+'" data-ircti_lk_name="'+$this.attr('name')+'"> <img src="'+settings.url_img_check+'" alt="Input checked" class="ircti_img_input" style="height: '+settings.height+'; width: '+settings.width+'; cursor: pointer;"/> </span>');
                }
                else{
                    $this.after('<span data-ircti_lk_id="'+$this.attr('id')+'" data-ircti_lk_name="'+$this.attr('name')+'"> <img src="'+settings.url_img_no_check+'" alt="Input no checked" class="ircti_img_input" style="height: '+settings.height+'; width: '+settings.width+'; cursor: pointer;"/> </span>');
                }
            });

            // Check the change checked of the input
            $('input[name="'+this.attr('name')+'"]').unbind('change')
            .change(function()
            {
                var $this = $(this);

                if($this.attr('type') == 'radio'){
                    $('span[data-ircti_lk_name="'+$this.attr('name')+'"]').html('<img src="'+settings.url_img_no_check+'" alt="Input no checked" style="height: '+settings.height+'; width: '+settings.width+'; cursor: pointer;"/>');

                    $('span[data-ircti_lk_id="'+$('input[name="'+$this.attr('name')+'"]:checked').attr('id')+'"]').html('<img src="'+settings.url_img_check+'" alt="Input checked" style="height: '+settings.height+'; width: '+settings.width+'; cursor: pointer;"/>');
                }
                else{
                    if($(this).prop('checked')){
                        $('span[data-ircti_lk_id="'+$this.attr('id')+'"]').html('<img src="'+settings.url_img_check+'" alt="Input checked" style="height: '+settings.height+'; width: '+settings.width+'; cursor: pointer;"/>');
                    }
                    else{
                        $('span[data-ircti_lk_id="'+$this.attr('id')+'"]').html('<img src="'+settings.url_img_no_check+'" alt="Input no checked" style="height: '+settings.height+'; width: '+settings.width+'; cursor: pointer;"/>');
                    }
                }
            });
        }
        else
        {
            console.warn('There is no input "radio" or "checkbox" in the jquery object passed');
        }

        return this;
    };
});
