gulp.task(
    'webserver',
    function() {
        gulp.src( './' )
            .pipe(
                webserver(
                    {
                        fallback: 'index.html',
                        livereload: true,
                        port: 8080,
                        directoryListing: {
                            enable: false,
                            path: './'
                        },
                        open: true,
                    }
                )
            );
    }
);