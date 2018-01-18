# vue-plupload-aj

vue-plupload-aj 是基于 plupload Vue组件

## Install

```sh
$ npm install vue-plupload-aj --save
```

## Usage
```sh
<script>
import Vue from 'vue'
// 依赖 Plupload 
import Plupload from 'plupload'
import VuePlupload from 'vue-plupload-aj'
Vue.use(VuePlupload, {
    // 注册标签名 默认为 'VuePlupload' 选填项
    tag: 'VuePlupload',
    // 需要注入 Plupload 必填项
    Plupload
})
</script>
// 模版使用
<template>
<VuePlupload ref="VuePlupload" :url="..." @init="...">
    上传
</VuePlupload>
</template>
### props
elClass: {
  type: [String, Object],
  default: 'component-plupload'
},
elStyle: {
  type: [String, Object]
}
// 以下配置对应 plupload 相应配置
url
runtimes
chunk_size
container
drop_element
file_data_name
filters
flash_swf_url
headers
http_method
max_retries
multipart
multipart_params
multi_selection
required_features
resize
silverlight_xap_url
send_chunk_number
send_file_name
unique_names
// methods 对应 plupload 方法
'init',
'setOption',
'getOption',
'refresh',
'start',
'stop',
'disableBrowse',
'getFile',
'addFile',
'removeFile',
'splice',
'trigger',
'hasEventListener',
'bind',
'unbind',
'unbindAll',
'destroy'
// event 对应 plupload 事件
'Init', 
'PostInit',
'OptionChanged',
'Refresh',
'StateChanged',
'Browse',
'FileFiltered',
'QueueChanged',
'FilesAdded',
'FilesRemoved',
'BeforeUpload',
'UploadFile',
'UploadProgress',
'BeforeChunkUpload',
'ChunkUploaded',
'FileUploaded',
'UploadComplete',
'Destroy',
'Error'
```
