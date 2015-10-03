describe("VCountdown", function() {
  var $element;

  $element = document.createElement('input');
  $element.setAttribute('class', 'countdown');
  document.body.appendChild($element);

  beforeEach(function() {
    $element.className = 'countdown'; //reset $element.className
  });

  describe("#hasClass", function() {
    it("returns false", function() {
      var vcd = VCountdown({
          target: '.countdown',
          maxChars: 160
      });

      expect(vcd.hasClass($element, 'foo')).toBe(false);
    });

    it("returns true", function() {
      $element.className += ' foo';
      var vcd = VCountdown({
          target: '.countdown',
          maxChars: 160
      });

      expect(vcd.hasClass($element, 'foo')).toBe(true);
    });
  });//#hasClass

  it("#addClass", function() {
    var vcd = VCountdown({
        target: '.countdown',
        maxChars: 160
    });
    vcd.addClass($element, 'bar');

    expect($element.className).toBe('countdown bar');
  });

  it("#removeClass", function() {
    var vcd = VCountdown({
        target: '.countdown',
        maxChars: 160
    });
    $element.className += ' foo';
    expect($element.className).toBe('countdown foo');

    vcd.removeClass($element, 'foo');
    expect($element.className).toBe('countdown');
  });

});//describe
