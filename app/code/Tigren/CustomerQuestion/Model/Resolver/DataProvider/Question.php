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
    protected $question;


    public function __construct(
        \Tigren\CustomerQuestion\Model\TigrenCustomerQuestion $question
    ) {
        $this->question = $question;
    }

    public function insertQuestion($data)
    {
        if(is_array($data)) {
            $this->question->setData($data)->save();
            return ['message' => 'Success'];
        }
        return ['message' => 'Fail'];
    }

}
