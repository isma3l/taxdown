//
//  ShareButtonViewManager.swift
//  taxDown
//
//  Created by karlo ismael morales oviedo on 23/01/23.
//

import UIKit

@objc (RCTShareButtonViewManager)
class ShareButtonViewManager: RCTViewManager {
  override static func requiresMainQueueSetup() -> Bool {
      return true
    }

    override func view() -> UIView! {
      return ShareButtonView()
    }

}
