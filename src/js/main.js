// Dropdown
// ----------------------------------------------------------------
// Clicking a toggle opens its sibling dropdown
$('.js-dropdown-toggle').click( function(event){
    event.stopPropagation();
    if ($('.js-dropdown').is(":visible")) {
        $('.js-dropdown').hide();
        $(this).siblings('.js-dropdown').show();
    } else {
        $(this).siblings('.js-dropdown').show();
    }
});

// Clicking anywhere closes all dropdowns
$(document).click(function(event) {
    if(!$(event.target).closest('.js-dropdown').length) {
        if($('.js-dropdown').is(":visible")) {
            $('.js-dropdown').hide()
        }
    }
});
