var templates = {};

templates.dashboard = [
  '<div class="beerBox">',
    '<button type="button" name="Delete" class="delete">Delete</button>',
    '<h3>',
    '<%= beerName %>',
    '</h3>',
    '<div class ="beerWords">',
    '<h6>',
    '<%= beerType %>',
    '</h6>',
    '<h6>',
    '<%= alcoholContent %>',
    '</h6>',
    '<span>',
    '<%= good %>',
    '</span>',
    '</div>',
    '</div>'
].join("");
