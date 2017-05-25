//
//  BXAppDelegate+BXPlatfrom.h
//  bricks
//
//  Created by Kalicy on 17/5/19.
//  Copyright © 2017年 kalicy@icloud.com. All rights reserved.
//

#import "BXAppDelegate.h"

@interface BXAppDelegate (BXPlatfrom)

/*
 * 初始化MobileAPI, 准备接口调用的所有重要属性
 */
- (void)initializeWithOptions:(NSDictionary *)launchOptions;

@end
