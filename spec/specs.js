describe('anagram', function() {
  it('returns word is anagram of second word', function() {
    expect(anagram('cat', ['act'])).to.eql(['act']);
  });

  it('returns two words when two words in list are anagrams of comparison word', function() {
    expect(anagram('cat', ['act', 'tac'])).to.eql(['act', 'tac']);
  });

  it('returns only the words that are anagrams', function() {
    expect(anagram('cat', ['dog', 'act', 'tac'])).to.eql(['act', 'tac']);
  });

  it('takes uppercase words and dreturns words that are anagrams', function() {
    expect(anagram('CaT', ['dOg', 'AcT', 'tAc'])).to.eql(['AcT', 'tAc']);
  });

  it('returns words that contain partial of the first word', function() {
    expect(anagram('cat', ['catamaran', 'tomcat', 'seatac', 'pdx', 'cat'])).to.eql(['catamaran', 'tomcat', 'seatac', 'cat']);
  });
});
