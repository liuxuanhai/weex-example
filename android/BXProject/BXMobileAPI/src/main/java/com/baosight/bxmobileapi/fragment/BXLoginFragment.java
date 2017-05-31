package com.baosight.bxmobileapi.fragment;

import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.content.LocalBroadcastManager;
import android.text.InputFilter;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.baosight.bxmobileapi.R;
import com.baosight.bxmobileapi.datamanager.BXDataManager;
import com.baosight.bxmobileapi.utils.StringUtil;
import com.baosight.iplat4mandroid.common.IPlat4MServiceStatus;
import com.baosight.iplat4mandroid.common.constant.Constants;
import com.baosight.iplat4mandroid.core.ei.eiinfo.EiInfo;
import com.baosight.iplat4mandroid.core.ei.service.APNManager;
import com.baosight.iplat4mandroid.core.uitls.EiInfo2XML;
import com.baosight.iplat4mandroid.core.uitls.NetWorkUtil;
import com.baosight.iplat4mandroid.core.uitls.TeleUtils;
import com.baosight.iplat4mandroid.login.UserSession;
import com.baosight.iplat4mandroid.login.iPlat4MLoginInputFilter;
import com.baosight.iplat4mandroid.ui.view.login.ExitApplication;


/**
 * Created with Android Studio2.0.
 * Project:BXProject
 * Title:BXLoginFragment
 * Description:
 * Copyright:Copyright (c) 2017
 * Company:宝信软件
 * Author:kalicy
 * Date:17/5/27
 * Time:下午2:37
 * Version 1.0
 */
public class BXLoginFragment extends Fragment {
    private static final String TAG = BXLoginFragment.class.getSimpleName();
    private EditText accountText = null;
    private EditText pwdText = null;
    private View rootView = null;
    private ProgressDialog dialog;
    private AlertDialog EFAlert = null;
    private BXDataManager dataManager = BXDataManager.getInstance();

    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        this.rootView = inflater.inflate(R.layout.login_fragment, container, false);
        this.accountText = (EditText)this.rootView.findViewById(R.id.login_edit_account);
        this.pwdText = (EditText)this.rootView.findViewById(R.id.login_edit_pwd);
        this.accountText.setFilters(new InputFilter[]{new iPlat4MLoginInputFilter()});

        Button resetButton = (Button)this.rootView.findViewById(R.id.login_btn_reset);
        resetButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View view) {
                BXLoginFragment.this.accountText.setText("");
                BXLoginFragment.this.pwdText.setText("");
            }
        });
        Button loginButton = (Button)this.rootView.findViewById(R.id.login_btn_login);
        loginButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View view) {
                Log.d(this.getClass().getName(), Thread.currentThread().getName() + ":" + "LoginButton onClick  enter!");
                APNManager mAPNManager = new APNManager(BXLoginFragment.this.getActivity());
                if(mAPNManager.checkNetworkType() == 5) {
                    Toast.makeText(getActivity(), "Current network is CTWAP", Toast.LENGTH_LONG);
                } else {
                    APNManager.isCTWAP = false;
                    loginSystem();
                }
            }
        });
        return this.rootView;
    }

    public void loginSystem() {
        if (dataManager.st.getServiceAgent() != null) {
            Log.v("start", "???????");
            Object info = this.setLoginInfo();
            dataManager.st.getServiceAgent().callSync(info);
            dataManager.st.getServiceAgent().loginAsyn(this.setLoginInfo(), this,
                    "loginCallback");
            Log.v("start", "???????");
        } else {
            Toast.makeText(getActivity(),"?????????????????????????????????", Toast.LENGTH_LONG);
        }
        this.dialog = new ProgressDialog(this.getActivity());
        this.dialog.setIndeterminate(true);
        this.dialog.setCancelable(false);
        this.dialog.setMessage("正在登录，请稍等...");
        this.dialog.show();
    }

    public void loginCallback(EiInfo info) {
        this.dialog.dismiss();
        this.pwdText.setText("");
        Log.v(TAG, "EiInfo2XML: " + EiInfo2XML.toXML(info));
        Log.i("LOGIN STATUS:", "" + info.getStatus());
        int status = info.getStatus();
        if(status == IPlat4MServiceStatus.SUCCESS) {
            boolean multiPane = false;
            if(!multiPane) {
                dataManager.isMBSLoggedin = true;
                Intent intent = new Intent(StringUtil.BXAccountDidLoginSuccessNotification);
                LocalBroadcastManager.getInstance(getActivity()).sendBroadcast(intent);
                getActivity().finish();
            }
        } else if(status == IPlat4MServiceStatus.INVALID_USER) {
            this.EFAlert = (new AlertDialog.Builder(this.getActivity())).setTitle("用户名错误,请重新输入!").setIcon(R.drawable.icon).setMessage(info.getMsg()).setPositiveButton("确定", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int which) {
                    BXLoginFragment.this.EFAlert.dismiss();
                }
            }).show();
        } else if(status == IPlat4MServiceStatus.INVALID_PASSWORD) {
            this.EFAlert = (new AlertDialog.Builder(this.getActivity())).setTitle("密码错误,请重新输入!").setIcon(R.drawable.icon).setMessage(info.getMsg()).setPositiveButton("确定", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int which) {
                    BXLoginFragment.this.EFAlert.dismiss();
                }
            }).show();
        } else if(status == IPlat4MServiceStatus.FAILED) {
            Log.v(TAG, "-1 访问服务器失败");
            if(!NetWorkUtil.isNetWorkAvailable(this.getActivity())) {
                this.EFAlert = (new AlertDialog.Builder(this.getActivity())).setTitle("网络连接异常,请检查网络!").setIcon(R.drawable.icon).setMessage(info.getMsg()).setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        Intent intent = new Intent("android.settings.WIRELESS_SETTINGS");
                        BXLoginFragment.this.getActivity().startActivity(intent);
                    }
                }).show();
            } else {
                Log.v(TAG, "网络正常，服务器返回-1");
                this.EFAlert = (new AlertDialog.Builder(this.getActivity())).setTitle("服务器异常!").setIcon(R.drawable.icon).setMessage(info.getMsg()).setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        BXLoginFragment.this.EFAlert.dismiss();
                    }
                }).show();
            }
        } else if(status == IPlat4MServiceStatus.DEVICE_LOCKED) {
            this.EFAlert = (new AlertDialog.Builder(this.getActivity())).setTitle("设备绑定请求正在审核!").setIcon(R.drawable.icon).setMessage(info.getMsg()).setPositiveButton("重新绑定", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int which) {
                    dataManager.registerDeviceToServer(accountText.getText().toString());
                    BXLoginFragment.this.EFAlert.dismiss();
                }
            }).setNegativeButton("取消", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int which) {
                    BXLoginFragment.this.EFAlert.dismiss();
                }
            }).show();
        } else if(status == IPlat4MServiceStatus.UNAUTHENTIFICATION) {
            this.showAlertDialog(info.getMsg());
        } else if(status == -11) {
            this.EFAlert = (new AlertDialog.Builder(this.getActivity())).setTitle("用户未激活").setIcon(R.drawable.icon).setMessage(info.getMsg()).setPositiveButton("确定", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int which) {
                    BXLoginFragment.this.EFAlert.dismiss();
                }
            }).show();
        } else if(status == -12) {
            this.EFAlert = (new AlertDialog.Builder(this.getActivity())).setTitle("用户名或密码错误").setIcon(R.drawable.icon).setMessage(info.getMsg()).setPositiveButton("确定", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int which) {
                    BXLoginFragment.this.EFAlert.dismiss();
                }
            }).show();
        } else if(status == -13) {
            this.EFAlert = (new AlertDialog.Builder(this.getActivity())).setTitle("用户没有系统登录权限").setIcon(R.drawable.icon).setMessage(info.getMsg()).setPositiveButton("确定", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int which) {
                    BXLoginFragment.this.EFAlert.dismiss();
                }
            }).show();
        } else {
            Log.v(TAG, "进入异常的其他错误状态" + Integer.toString(status));
            this.EFAlert = (new AlertDialog.Builder(this.getActivity())).setTitle("服务器异常!").setIcon(R.drawable.icon).setMessage(info.getMsg()).setPositiveButton("确定", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int which) {
                    BXLoginFragment.this.EFAlert.dismiss();
                }
            }).show();
        }

        Log.d(this.getClass().getName(), Thread.currentThread().getName() + ":" + "LoginButton onClick  end!");
    }

    public void showAlertDialog(String infoMsg) {
        AlertDialog alert = (new AlertDialog.Builder(this.getActivity())).setTitle("设备未绑定，是否绑定?").setIcon(R.drawable.icon).setMessage(infoMsg).setPositiveButton("是", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                dataManager.registerDeviceToServer(accountText.getText().toString());
            }
        }).setNegativeButton("否", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                dialog.cancel();
            }
        }).show();
    }

    public EiInfo setLoginInfo() {
        String mUserName = this.accountText.getText().toString();
        String mPassword = this.pwdText.getText().toString();
        String deviceId = TeleUtils.getDeviceId(this.getActivity());
        Constants.DEVICE_ID = deviceId;
        UserSession userSession = UserSession.getUserSession();
        userSession.setUserName(mUserName);
        userSession.setPassWord(mPassword);
        userSession.setUserId(mUserName);
        EiInfo info = new EiInfo();
        info.set("parameter_userid", mUserName);
        info.set("parameter_password", mPassword);
        info.set("parameter_deviceid", deviceId);
        info.set("parameter_globaldeviceid", deviceId);
        info.set("os", "android");
        Log.i("操作系统", "android");
        info.set("osVersion", Build.VERSION.RELEASE);
        Log.i("系统版本", Build.VERSION.RELEASE);
        info.set("network", NetWorkUtil.getNetworkType(this.getActivity()));
        Log.i("网络类型", NetWorkUtil.getNetworkType(this.getActivity()));
        info.set("cpu", Build.CPU_ABI);
        Log.i("CPU型号", Build.CPU_ABI);
        info.set("memery", Long.toString(BXDataManager.getTotalMemery()));
        Log.i("内存容量", Long.toString(BXDataManager.getTotalMemery()));
        info.set("deviceBrand", Build.BRAND);
        Log.i("设备品牌", Build.BRAND);
        WifiManager wifi = (WifiManager)this.getActivity().getSystemService("wifi");
        WifiInfo mWifiInfo = wifi.getConnectionInfo();
        if(mWifiInfo.getMacAddress() == null) {
            info.set("mac", "");
            Log.i("MAC地址", "MAC地址为空");
        } else {
            info.set("mac", mWifiInfo.getMacAddress());
            Log.i("MAC地址", mWifiInfo.getMacAddress());
        }

        DisplayMetrics displaymetrics = new DisplayMetrics();
        this.getActivity().getWindowManager().getDefaultDisplay().getMetrics(displaymetrics);
        float density = displaymetrics.density;
        Log.i("显示密度", density + "");
        info.set("resolution1", (float)displaymetrics.widthPixels * density + "");
        info.set("resolution2", (float)displaymetrics.heightPixels * density + "");
        Log.i("设备的宽", (float)displaymetrics.widthPixels * density + "");
        Log.i("设备的高", (float)displaymetrics.heightPixels * density + "");
        info.set("parameter_clienttypeid", "android");
        info.set("parameter_clienidtversion", Build.MODEL);
        Log.i("设备名称", Build.MODEL);
        return info;
    }
}
