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
#import "DefaultLoadViewController_iPhone.h"

#define DEMO

@implementation BXAppDelegate (BXPlatfrom)

- (void)initializeWithOptions:(NSDictionary *)launchOptions {
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    
#ifdef DEMO
    LoginViewController *loginViewController = [[LoginViewController_iPhone alloc] initWithNibName:@"LoginViewController_iPhone" bundle:[NSBundle bundleForClass:[LoginViewController_iPhone class]]];
    
    [[Container instance] launchAppWithDictionary:launchOptions
                                      isDebugMode:YES
                                 WithLocalService:NO
                                 toViewController:loginViewController
                                      AutoSetView:NO];
    
    
    self.window.rootViewController = loginViewController;
    
#else
    DefaultLoadViewController_iPhone *defaultView = [[DefaultLoadViewController_iPhone alloc] initWithNibName:@"DefaultLoadViewController_iPhone" bundle:[NSBundle bundleForClass:[DefaultLoadViewController_iPhone class]]] ;
    
    [[Container instance] launchAppWithDictionary:launchOptions
                                      isDebugMode:NO
                                 WithLocalService:NO
                                 toViewController:defaultView
                                      AutoSetView:NO];
    
    self.window.rootViewController = defaultView;
#endif
    
    [self.window makeKeyAndVisible];
}
@end
