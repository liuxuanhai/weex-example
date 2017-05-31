package com.baosight.bxmobileapi.datamanager;

import android.app.Activity;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import com.baosight.bxmobileapi.BuildConfig;
import com.baosight.bxmobileapi.R;
import com.baosight.bxmobileapi.activity.BXLoginActivity;
import com.baosight.bxmobileapi.utils.StringUtil;
import com.baosight.iplat4mandroid.common.constant.KeyConstant;
import com.baosight.iplat4mandroid.core.constant.EiConstant;
import com.baosight.iplat4mandroid.core.ei.eiinfo.EiBlockMeta;
import com.baosight.iplat4mandroid.core.ei.eiinfo.EiColumn;
import com.baosight.iplat4mandroid.core.ei.eiinfo.EiInfo;
import com.baosight.iplat4mandroid.core.ei.service.EiService;
import com.baosight.iplat4mandroid.core.uitls.ConfigUtil;
import com.baosight.iplat4mandroid.core.uitls.StartUpHelper;
import com.baosight.iplat4mandroid.core.uitls.TeleUtils;
import com.baosight.iplat4mandroid.login.UserSession;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;


/**
 * Created with Android Studio2.0.
 * Project:BXProject
 * Title:BXDataManager
 * Description:
 * Copyright:Copyright (c) 2017 宝信软件.
 * Author:kalicy
 * Date:17/5/27 下午4:21
 */

public class BXDataManager {

    private static BXDataManager mInstance;
    public StartUpHelper st;
    public boolean isMBSLoggedin = false;
    private Activity activity;

    public static BXDataManager getInstance() {
        synchronized (BXDataManager.class) {
            if (mInstance == null) {
                mInstance = new BXDataManager();
            }
        }
        return mInstance;
    }

    public void initDataManager(Activity activity) {
        this.activity = activity;
        if (!BuildConfig.DEBUG) {
            initDebugMode();
        }
        else {
            initReleaseMode();
        }
    }

    private void initDebugMode() {
        activity.getIntent().putExtra(KeyConstant.MBS_HTTPURL,
                StringUtil.getConfiguration(activity, R.string.AgentService));
        activity.getIntent().putExtra(KeyConstant.UPDATE_URL,
                StringUtil.getConfiguration(activity, R.string.UpdateURL));
        activity.getIntent().putExtra(KeyConstant.PACKAGE_NAME, activity.getPackageName());
        activity.getIntent().putExtra(KeyConstant.MBS_HTTPSURL,
                StringUtil.getConfiguration(activity, R.string.LoginService));// LoginService
        activity.getIntent().putExtra(KeyConstant.AGENT_TYPE,"debug");// LoginService
        if(isMBSLoggedin) {
            UserSession userSession = UserSession.getUserSession();
            Bundle bundle = new Bundle();
            bundle.putParcelable("UserSession", userSession);
            activity.getIntent().putExtras(bundle);
            st = StartUpHelper.getStartUpHelper(activity);// MBS Service��������
        }
        else {
            st = StartUpHelper.getStartUpHelper(activity);// MBS Service��������
            Intent intent = new Intent(activity, BXLoginActivity.class);
            activity.startActivity(intent);
        }
    }

    private void initReleaseMode() {
        String status = activity.getIntent().getStringExtra("stauts");
        if (status == null || !status.equals("stauts")) {
            activity.getIntent().putExtra(KeyConstant.MBS_HTTPURL,
                    StringUtil.getConfiguration(activity, R.string.AgentService));
            activity.getIntent().putExtra(KeyConstant.UPDATE_URL,
                    StringUtil.getConfiguration(activity, R.string.UpdateURL));
            activity.getIntent().putExtra(KeyConstant.PACKAGE_NAME, activity.getPackageName());
            activity.getIntent().putExtra(KeyConstant.MBS_HTTPSURL,
                    StringUtil.getConfiguration(activity, R.string.LoginService));// LoginService

            st = StartUpHelper.getStartUpHelper(activity);// MBS Service��������
            st.start();
        }
    }

    public static long getTotalMemery() {
        String path = "/proc/meminfo";
        String content = null;
        BufferedReader br = null;

        try {
            br = new BufferedReader(new FileReader(path), 8);
            String begin;
            if((begin = br.readLine()) != null) {
                content = begin;
            }
        } catch (FileNotFoundException var16) {
            var16.printStackTrace();
        } catch (IOException var17) {
            var17.printStackTrace();
        } finally {
            if(br != null) {
                try {
                    br.close();
                } catch (IOException var15) {
                    var15.printStackTrace();
                }
            }

        }

        int begin1 = content.indexOf(58);
        int end = content.indexOf(107);
        content = content.substring(begin1 + 1, end).trim();
        long mTotal = (long)Integer.parseInt(content);
        return mTotal;
    }

    private Activity getActivity() {
        return activity;
    }

    public void registerDeviceToServer(String mUserName) {
        EiInfo inInfo = new EiInfo();
        inInfo.set("projectName", "platmbs");
        inInfo.set("serviceName", "ML00");
        inInfo.set("methodName", "bindingUserAndDevice");
        inInfo.set("parameter_compressdata", "true");
        inInfo.set("parameter_encryptdata", "true");
        inInfo.set("parameter_clienttypeid", "android");
        inInfo.set("parameter_clienidtversion", Build.VERSION.RELEASE);
        EiBlockMeta meta = new EiBlockMeta();
        EiColumn col0 = new EiColumn("userId");
        col0.setPos(0);
        meta.addMeta(col0);
        EiColumn col1 = new EiColumn("deviceId");
        col1.setPos(1);
        meta.addMeta(col1);
        EiColumn col2 = new EiColumn("deviceType");
        col2.setPos(2);
        meta.addMeta(col2);
        EiColumn col3 = new EiColumn("globaldeviceid");
        col3.setPos(3);
        meta.addMeta(col3);
        inInfo.addBlock(EiConstant.resultBlock).addBlockMeta(meta);
        HashMap map = new HashMap();
        String deviceId = TeleUtils.getDeviceId(this.getActivity());
        map.put("userId", mUserName);
        map.put("deviceId", deviceId);
        map.put("deviceType", "android");
        map.put("globaldeviceid", deviceId);
        inInfo.getBlock(EiConstant.resultBlock).addRow(map);
        EiService.getBoundService().getAgent().callService(inInfo, this, "registerCallback");
    }
}
