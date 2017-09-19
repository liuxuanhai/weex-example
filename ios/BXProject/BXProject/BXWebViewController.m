//
//  BXWebViewController.m
//  BXProject
//
//  Created by Kalicy on 17/6/26.
//  Copyright © 2017年 Kalicy. All rights reserved.
//

#import "BXWebViewController.h"

@interface BXWebViewController ()

@end

@implementation BXWebViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    UIWebView* webView = [[UIWebView alloc] initWithFrame:self.view.bounds];
    webView.scalesPageToFit=YES;
    [self.view addSubview:webView];
    [webView loadRequest:[[NSURLRequest alloc] initWithURL:self.url]];
    
}

@end
