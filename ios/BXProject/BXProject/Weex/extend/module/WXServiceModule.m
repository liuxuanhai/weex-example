//
//  WXServiceModule.m
//  BXProject
//
//  Created by Kalicy on 17/5/24.
//  Copyright © 2017年 Kalicy. All rights reserved.
//

#import "WXServiceModule.h"
#import <iPlat4M_framework/iPlat4M_framework.h>

@interface WXServiceModule () {
    WXModuleCallback _callback;
}

@end

@implementation WXServiceModule

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(fetch:callback:))

- (void)fetch:(NSMutableDictionary *)params callback:(WXModuleCallback)callback {
    _callback = callback;
    [[Container instance].serviceAgent callWebServiceWithObject:_callback
                                                    requestDict:params
                                                         target:self
                                                successCallBack:@selector(successCallBack: data:)
                                                   failCallBack:@selector(failCallBack: data:)];
    
}

- (void)successCallBack:(WXModuleCallback)sender data:(id)data{
    WXModuleCallback callback = sender;
    if (callback) {
        callback(data);
    }
    NSInteger status = [[(NSMutableDictionary *)data objectForKey:@"status"] intValue];
    if (status == IPLAT4M_STATUS_SUCCESS) {
       // GetHQTaskListResponseVo *vo = [[GetHQTaskListResponseVo alloc] initWithDic:result];
        
    }else{
        //请求服务器失败，请稍后再试
    }
    
}
- (void)failCallBack:(WXModuleCallback)sender data:(id)data{
    //业务操作失败
    WXModuleCallback callback = sender;
    if (callback) {
        callback(data);
    }
}

@end
