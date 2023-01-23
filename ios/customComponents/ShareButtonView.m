//
//  ShareButtonView.m
//  taxDown
//
//  Created by karlo ismael morales oviedo on 23/01/23.
//

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RCTShareButtonViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(status, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onClick, RCTBubblingEventBlock)
@end
