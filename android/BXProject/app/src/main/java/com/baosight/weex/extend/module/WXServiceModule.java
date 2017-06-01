package com.baosight.weex.extend.module;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.baosight.bxmobileapi.datamanager.BXDataManager;
import com.baosight.iplat4mandroid.core.ei.service.EiService;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;


import java.io.StringWriter;
import java.util.Map;

/**
 * BXProject
 * WXServiceModule
 *
 * Created by kalicy on 17/5/31 下午2:52
 * Copyright:Copyright (c) 2017 宝信软件. All rights reserved.
 */
public class WXServiceModule extends WXModule {
    private JSCallback jsCallback;

    @JSMethod(uiThread = true)
    public void fetch(Map params, final JSCallback callback) {
        this.jsCallback = callback;
        Map attr = (Map) params.get("attr");
        attr.put("datatype", "json/xml");
        BXDataManager.getInstance().st.getServiceAgent().callService(JSON.toJSONString(params), this, "fetchCallBack");
    }

    public void fetchCallBack(String info) {
        if (this.jsCallback != null) {
            Map<String,Object> map1 = (Map<String,Object>)JSON.parse(info);
            this.jsCallback.invoke(map1);
        }
    }
}
