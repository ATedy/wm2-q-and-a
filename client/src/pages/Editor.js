import React from 'react';
import ImgurUploaderInit from 'ckeditor5-imgur-uploader';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = (props) => {
  const ImgurUploader = ImgurUploaderInit({clientID: 'b1bdfd84072fbe7'});
  const {data, changefn, readOnly} = props;

  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onChange={changefn}
      config={{
        extraPlugins: [ImgurUploader],
        readOnly: readOnly,
      }}
    />
  );
}

export default Editor;