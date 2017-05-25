//
//  BXAppDelegate+BXPlatfrom.m
//  bricks
//
//  Created by Kalicy on 17/5/19.
//  Copyright © 2017年 kalicy@icloud.com. All rights reserved.
//

#import "BXAppDelegate+BXPlatfrom.h"
#import "LoginViewController.h"
#import "LoginViewController_iPhone.h"
#import <iPlat4M_framework/iPlat4M_framework.h>

@implementation BXAppDelegate (BXPlatfrom)

- (void)initializeWithOptions:(NSDictionary *)launchOptions {
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    
#ifdef DEBUG
    LoginViewController *loginViewController = [[LoginViewController_iPhone alloc] initWithNibName:@"LoginViewController_iPhone" bundle:[NSBundle bundleForClass:[LoginViewController_iPhone class]]];
    
    [[Container instance] launchAppWithDictionary:launchOptions
                                      isDebugMode:YES
                                 WithLocalService:NO
                                 toViewController:loginViewController
                                      AutoSetView:NO];
    
    
    self.window.rootViewController = loginViewController;
    
#else
    [[Container instance] launchAppWithDictionary:launchOptions
                                      isDebugMode:NO
                                 WithLocalService:NO
                                 toViewController:nil
                                      AutoSetView:YES];
#endif
    
    [self.window makeKeyAndVisible];
}
@end
