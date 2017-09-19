//
//  BXWXViewController.m
//  BXProject
//
//  Created by Kalicy on 17/5/10.
//  Copyright © 2017年 Kalicy. All rights reserved.
//

#import "BXWXViewController.h"
#import "BXWeexDefine.h"

@implementation BXWXViewController
@synthesize sourceURL = _sourceURL;

- (void)viewDidLoad {
    [super viewDidLoad];
    UIBarButtonItem *btnBack = [[UIBarButtonItem alloc] initWithTitle:@"返回" style:UIBarButtonItemStylePlain target:self action:nil];
    self.navigationController.navigationBar.topItem.backBarButtonItem=btnBack;
}

- (NSURL*)sourceURL {
    if (_sourceURL == nil) {
        _sourceURL = [NSURL URLWithString:BUNDLE_URL];
    }
    return _sourceURL;
}
@end
