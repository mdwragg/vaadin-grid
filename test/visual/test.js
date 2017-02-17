gemini.suite('vaadin-grid', function(rootSuite) {

  rootSuite.setUrl('/');

  gemini.suite('vaadin-grid', function(suite) {
    suite
      .setCaptureElements('#column-groups')
      .capture('column-groups', {}, function(actions, find) {
        actions.wait(3000); // hack for IE/Edge
      });

    suite
      .setCaptureElements('#sorting')
      .capture('sorting', {}, function(actions, find) {
        actions.wait(3000); // hack for IE/Edge
      });
  });

});
