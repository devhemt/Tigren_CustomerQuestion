<?php
/**
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2023 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

namespace Tigren\CustomerQuestion\Model\Resolver\DataProvider;

use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\GraphQl\Exception\GraphQlNoSuchEntityException;
use Magento\Framework\Exception\LocalizedException;

class Question
{
    protected $_objectManager;


    public function __construct(
        \Magento\Framework\ObjectManagerInterface $objectManager
    ) {
        $this->_objectManager = $objectManager;
    }

    public function insertQuestion($data)
    {
        if(is_array($data)) {
            $video = $this->_objectManager->create('Tigren\CustomerQuestion\Model\TigrenCustomerQuestion');
            $video->setData($data)->save();
            return ['message' => 'Success'];
        }
        return ['message' => 'Fail'];
    }

}
