//
//  WXCacheModule.m
//  BXProject
//
//  Created by Kalicy on 17/7/4.
//  Copyright © 2017年 Kalicy. All rights reserved.
//

#import "WXCacheModule.h"

@implementation WXCacheModule

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(getItem:callback:))
WX_EXPORT_METHOD(@selector(setItem:value:callback:))
WX_EXPORT_METHOD(@selector(removeItem:callback:))

#pragma mark - Export
- (void)getItem:(NSString *)key callback:(WXModuleCallback)callback
{
    if ([self checkInput:key]) {
        if (callback) {
            callback(@{@"result":@"failed",@"data":@"key must be a string or number!"});
        }
        return;
    }
    
    NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
    NSString* value = [userDefaults stringForKey:key];
    

    if (callback) {
        callback(@{@"result":@"success",@"data":value?value:@""});
    }
}

- (void)setItem:(NSString *)key value:(NSString *)value callback:(WXModuleCallback)callback
{
    if ([self checkInput:key] || [self checkInput:value]) {
        if (callback) {
            callback(@{@"result":@"failed",@"data":@"key or value must be a string or number!"});
        }
        return;
    }

    NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
    [userDefaults setObject:value forKey:key];
    [userDefaults synchronize];
    
    if (callback) {
        callback(@{@"result":@"success"});
    }
}

- (void)removeItem:(NSString *)key callback:(WXModuleCallback)callback
{
    if ([self checkInput:key]) {
        if (callback) {
            callback(@{@"result":@"failed",@"data":@"key must a string or number!"});
        }
        return;
    }
    
    NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
    [userDefaults removeObjectForKey:key];
    
    if (callback) {
        callback(@{@"result":@"success"});
    }
}

#pragma mark - Utils
- (BOOL)checkInput:(NSString*)input{
    return !([input isKindOfClass:[NSString class]] && input.length > 0);
}

@end
