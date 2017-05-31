package com.baosight.bxproject;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.support.v4.content.LocalBroadcastManager;

import com.baosight.bxmobileapi.datamanager.BXDataManager;
import com.baosight.bxmobileapi.utils.StringUtil;
import com.baosight.weex.WXPageActivity;

/**
 * Project:BXProject
 * Title:com.baosight.bxproject.BXMainActivity
 * Description:
 * Copyright:Copyright (c) 2017 宝信软件. All rights reserved.
 * Author:kalicy
 * Date:17/5/31 上午9:07
 */
public class BXMainActivity extends WXPageActivity{
    private BXDataManager dataManager = BXDataManager.getInstance();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Register to receive messages.
        // We are registering an observer (mMessageReceiver) to receive Intents
        // with actions named "custom-event-name".
        LocalBroadcastManager.getInstance(this).registerReceiver(mMessageReceiver,
                new IntentFilter(StringUtil.BXAccountDidLoginSuccessNotification));
    }

    @Override
    protected void initView() {
        dataManager.initDataManager(this);
        if (!dataManager.isMBSLoggedin) {
            return;
        }

        super.initView();
    }

    private BroadcastReceiver mMessageReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            // Get extra data included in the Intent
            BXMainActivity.super.initView();
        }
    };

    @Override
    public void onDestroy() {
        // Unregister since the activity is about to be closed.
        LocalBroadcastManager.getInstance(this).unregisterReceiver(mMessageReceiver);
        super.onDestroy();
    }
}
