//
//  BXWXViewController.h
//  BXProject
//
//  Created by Kalicy on 17/5/10.
//  Copyright © 2017年 Kalicy. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <SRWebSocket.h>

@interface BXWXViewController : UIViewController<SRWebSocketDelegate>

@property (nonatomic, strong) NSString *script;
@property (nonatomic, strong) NSURL *url;

@property (nonatomic, strong) SRWebSocket *hotReloadSocket;
@property (nonatomic, strong) NSString *source;

@end

