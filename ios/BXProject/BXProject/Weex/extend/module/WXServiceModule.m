//
//  WXServiceModule.m
//  BXProject
//
//  Created by Kalicy on 17/5/24.
//  Copyright © 2017年 Kalicy. All rights reserved.
//

#import "WXServiceModule.h"
#import <iPlat4M_framework/iPlat4M_framework.h>

@implementation WXServiceModule

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(fetch:callback:))
WX_EXPORT_METHOD(@selector(fetchFile:callback:))

- (void)fetch:(NSMutableDictionary *)params callback:(WXModuleCallback)callback {
    [[Container instance].serviceAgent callWebServiceWithObject:self requestDict:params successWithCallbackBlock:^(NSMutableDictionary *data) {
        if (callback) {
            callback(data);
        }
    } failWithCallbackBlock:^(NSMutableDictionary *data) {
        if (callback) {
            callback(data);
        }
    }];
    
}

- (void)fetchFile:(NSString*)url callback:(WXModuleCallback)callback {
    EiInfo * eiInfo = [[EiInfo alloc] init];
    [eiInfo set:PROJECT_TOKEN value:@"FileService"];
    [eiInfo set:@"fileurl" value:url];
    [[Container instance].serviceAgent callService:eiInfo successWithCallbackBlock:^(EiInfo * info) {
        if (callback) {
            id data = [EiInfo2Json EiInfo2JsonObject:info];
            callback(data);
        }
    } failWithCallbackBlock:^(EiInfo * info) {
        if (callback) {
            id data = [EiInfo2Json EiInfo2JsonObject:info];
            callback(data);
        }
    }];
}

@end
