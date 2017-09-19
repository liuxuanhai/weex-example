//
//  WXLoginModule.m
//  BXProject
//
//  Created by 高军 on 2017/6/23.
//  Copyright © 2017年 Kalicy. All rights reserved.
//

#import "WXLoginModule.h"
#import <iPlat4M_framework/iPlat4M_framework.h>

#define screenWidth [UIScreen mainScreen].bounds.size.width
#define screenHeight [UIScreen mainScreen].bounds.size.height
@implementation WXLoginModule
@synthesize weexInstance;


WX_EXPORT_METHOD(@selector(getUserInfo:))

- (void) getUserInfo: (WXModuleCallback)callback{
    callback(@{@"parameter_userid": [Container instance].serviceAgent.userSession.userID, @"parameter_username": [Container instance].serviceAgent.userSession.userName});
}

@end
