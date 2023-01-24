//
//  RCTSharingModule.m
//  taxDown
//
//  Created by karlo ismael morales oviedo on 24/01/23.
//

#import "RCTSharingModule.h"

@implementation RCTSharingModule
RCT_EXPORT_MODULE()

- (void)shareText:(NSString *)text {
  NSMutableArray *sharingItems = [NSMutableArray new];
  [sharingItems addObject:text];
  
  dispatch_async(dispatch_get_main_queue(), ^(void) {
    UIViewController *ctrl = [[[[UIApplication sharedApplication] delegate] window] rootViewController];

    UIActivityViewController *activityController = [[UIActivityViewController alloc] initWithActivityItems:sharingItems applicationActivities:nil];
    
    [ctrl presentViewController:activityController animated:YES completion:nil];
  });
  
}

RCT_EXPORT_METHOD(shareMessage: (NSString *)message)
{
  [self shareText:(message)];
}
@end
