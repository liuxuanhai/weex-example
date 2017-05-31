package com.baosight.bxmobileapi.utils;

import android.content.Context;
import android.content.res.Resources;
import android.util.Log;

import com.baosight.bxmobileapi.BuildConfig;
import com.baosight.bxmobileapi.R;

/**
 * Project:BXProject
 * Title:StringUtil
 * Description:
 * Copyright:Copyright (c) 2017 宝信软件. All rights reserved.
 * Author:kalicy
 * Date:17/5/31 上午10:10
 */
public class StringUtil {
    public static final String BXAccountDidLoginSuccessNotification =  "BXAccountDidLoginSuccessNotification";

    public static String getConfiguration(Context context, int resid) {
        String agentService = "";
        String agentHost = "";
        try {
            agentService = context.getResources().getText(resid).toString();
            if (!BuildConfig.DEBUG) {
                agentHost = context.getResources().getText(R.string.dev_host).toString();
            }
            else {
                agentHost = context.getResources().getText(R.string.online_host).toString();
            }
            String url = String.format(agentService, agentHost);
            return url;
        } catch (Resources.NotFoundException var7) {
            return agentService;
        } finally {
            ;
        }
    }
}
