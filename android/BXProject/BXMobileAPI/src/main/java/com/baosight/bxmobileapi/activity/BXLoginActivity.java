package com.baosight.bxmobileapi.activity;

import android.os.Bundle;
import android.support.v4.app.FragmentActivity;

import com.baosight.bxmobileapi.R;
import com.baosight.bxmobileapi.fragment.BXLoginFragment;

/**
 * Project:BXProject
 * Title:BXLoginActivity
 * Copyright:Copyright (c) 2017
 * Company:宝信软件
 * Author:kalicy
 * Date:17/5/27
 * Time:下午2:33
 */
public class BXLoginActivity extends FragmentActivity{
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        // Create an instance of Fragment
        BXLoginFragment fragment = new BXLoginFragment();
        getSupportFragmentManager().beginTransaction()
                .replace(R.id.fragment_container, fragment).commit();
    }
}
