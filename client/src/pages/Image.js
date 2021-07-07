import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ SimpleUploadAdapter, ... ],
        toolbar: [ ... ],
        simpleUpload: {
            // The URL that the images are uploaded to.
            uploadUrl: 'http://example.com',

            // Enable the XMLHttpRequest.withCredentials property.
            withCredentials: true,

            // Headers sent along with the XMLHttpRequest to the upload server.
            headers: {
                'X-CSRF-TOKEN': 'CSRF-Token',
                Authorization: 'Bearer <JSON Web Token>'
            }
        }
    } )
    .then( ... )
    .catch( ... );